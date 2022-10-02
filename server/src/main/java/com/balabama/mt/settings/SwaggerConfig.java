package com.balabama.mt.settings;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class SwaggerConfig {

    @Value("${mt.root-uri}")
    String rootUri;
    @Value("${mt.version}")
    String version;

    @Bean
    public OpenAPI openApi() {
        Server server = new Server();
        server.setUrl(rootUri);
        server.setDescription("MT service api");
        final String securitySchemeName = "bearerAuth";
        return new OpenAPI().info(new Info().title("Balabama Group").description("API documentation of MP").version(version))
            .components(new Components()).addServersItem(server).addSecurityItem(new SecurityRequirement().addList(securitySchemeName))
            .components(
                new Components()
                    .addSecuritySchemes(securitySchemeName,
                        new SecurityScheme()
                            .type(SecurityScheme.Type.HTTP)
                            .scheme("bearer")
                            .bearerFormat("JWT")));

    }
}