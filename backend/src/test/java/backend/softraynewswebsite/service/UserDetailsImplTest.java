package backend.softraynewswebsite.service;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.junit.jupiter.api.Test;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

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
}
