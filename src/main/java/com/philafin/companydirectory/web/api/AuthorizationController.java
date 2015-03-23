package com.philafin.companydirectory.web.api;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

/**
 */
@RestController
@RequestMapping("/api")
public class AuthorizationController {

    /**
     * @return
     */
    @RequestMapping("/authorizations")
    public Collection roles() {

        Collection roles = SecurityContextHolder.getContext().getAuthentication().getAuthorities();

        return roles;

    }
}
