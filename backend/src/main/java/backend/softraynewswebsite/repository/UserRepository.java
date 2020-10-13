package backend.softraynewswebsite.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import backend.softraynewswebsite.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	Optional<User> findByUsername(String username);
}
