package com.balabama.mt.settings.security;

import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class AuthEntryPointJwt implements AuthenticationEntryPoint {

    @Override
    public void commence(
        HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        if (request.getServletPath() != null && request.getServletPath().startsWith("/api")) {
            response.setStatus(HttpStatus.UNAUTHORIZED.value());
        } else {
            RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher("/");
            dispatcher.forward(request, response);
        }
    }
}