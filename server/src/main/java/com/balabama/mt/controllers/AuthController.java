package com.balabama.mt.controllers;

import com.balabama.mt.converters.UserDtoConverter;
import com.balabama.mt.dtos.ExistingUserDto;
import com.balabama.mt.dtos.JwtResponse;
import com.balabama.mt.dtos.LoginRequest;
import com.balabama.mt.dtos.SignupRequest;
import com.balabama.mt.dtos.UserDto;
import com.balabama.mt.entities.User;
import com.balabama.mt.exceptions.MTException;
import com.balabama.mt.repositories.UserRepository;
import com.balabama.mt.settings.security.JwtUtils;
import com.balabama.mt.settings.security.UserDetailsImpl;
import java.util.List;
import java.util.stream.Collectors;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final PasswordEncoder encoder;
    private final JwtUtils jwtUtils;
    private final UserDtoConverter converter;

    @PostMapping("/signin")
    public JwtResponse authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
            .map(GrantedAuthority::getAuthority).toList();
        return new JwtResponse(jwt,
            userDetails.getId(),
            userDetails.getUsername(),
            userDetails.getEmail(),
            roles.get(0));
    }

    @PostMapping("/signup")
    public UserDto registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            throw new MTException(HttpStatus.BAD_REQUEST, "Error: Username is already taken!");
        }
        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            throw new MTException(HttpStatus.BAD_REQUEST, "Error: Email is already in use!");
        }
        User user = new User(signUpRequest, encoder.encode(signUpRequest.getPassword()));
        return converter.simpleConvert(userRepository.save(user), UserDto.class);
    }

    @GetMapping("/existing_users")
    public List<ExistingUserDto> getUsernames() {
        return userRepository.findDistinctByUsernameAndDistinctByEmail();
    }
}