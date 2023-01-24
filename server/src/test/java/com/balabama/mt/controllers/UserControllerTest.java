//package com.balabama.mt.controllers;
//
//import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.jwt;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//import com.balabama.mt.ServerApplicationTests;
//import org.junit.jupiter.api.Test;
//import org.springframework.http.MediaType;
//
//class UserControllerTest extends ServerApplicationTests {
//
//    private static final String PATH = "/api/user";
//
//    @Test
//    void list() throws Exception {
//        mockMvc.perform(get(PATH)
//                .accept(MediaType.APPLICATION_JSON)
//                .with(jwt()))
//            .andExpect(status().isOk())
//            .andExpect(jsonPath("$").exists())
//            .andExpect(jsonPath("$[*].id").exists())
//            .andExpect(jsonPath("$[*].username").exists())
//            .andExpect(jsonPath("$[*].email").exists());
//    }
//}