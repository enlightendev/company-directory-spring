package com.philafin.companydirectory.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity;

/**
 * Security config
 * http://spring.io/guides/gs/securing-web/
 * http://docs.spring.io/spring-security/site/docs/3.2.x/guides/hellomvc.html
 *
 * NOTE: to configure CROWD based security simply uncomment @ImportResource and comment out
 * any overiding methods in WebSecurity Config
 */
@Configuration
@EnableWebMvcSecurity
@ImportResource( { "classpath*:/crowd-client.xml", "classpath*:/crowd-spring-security.xml"})
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    /**
     * Defines witch URL paths should be secured and which should not.
     * Specifically, the "/" and "/home" paths are configured to not
     * require any authentication. All other paths must be authenticated.
     *
     * @param http
     * @throws Exception
     */
    /*
    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http
                .authorizeRequests()
                .antMatchers("/", "/home").permitAll()
                .anyRequest().authenticated();
        http
                .formLogin()
                .loginPage("/login")
                .permitAll()
                .and()
                .logout()
                .permitAll();
    }
    */

    /*
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .inMemoryAuthentication()
                .withUser("user").password("password").roles("USER");
    }
    */
}