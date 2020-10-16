package backend.softraynewswebsite.service;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.junit.jupiter.api.Test;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import backend.softraynewswebsite.model.User;

class UserDetailsImplTest {
	
	@Test
	void testUserRoles() {
		String roles = "USER,ADMIN";
		List<GrantedAuthority> roleList = Arrays.stream(roles.split(","))
				.map(SimpleGrantedAuthority::new)
				.collect(Collectors.toList());
		assertThat(roleList).hasSize(2);
		assertThat(roleList.get(0).toString()).isEqualTo("USER");
		assertThat(roleList.get(1).toString()).isEqualTo("ADMIN");
	}
	
	@Test
	void testUserDetailsImplConstructior() {
		User user = new User();
		user.setId(0);
		user.setUsername("username");
		user.setPassword("password");
		user.setRoles("USER,ADMIN");
		UserDetailsImpl userDetailsImpl = new UserDetailsImpl(user);
		assertThat(userDetailsImpl).hasFieldOrPropertyWithValue("id", 0);
		assertThat(userDetailsImpl).hasFieldOrPropertyWithValue("username", "username");
		assertThat(userDetailsImpl).hasFieldOrPropertyWithValue("password", "password");
		assertThat(userDetailsImpl).hasFieldOrProperty("roles");
	}
}
