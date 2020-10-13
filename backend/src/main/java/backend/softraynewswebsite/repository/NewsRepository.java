package backend.softraynewswebsite.repository;

import org.springframework.data.repository.CrudRepository;

import backend.softraynewswebsite.model.News;

public interface NewsRepository extends CrudRepository<News, Integer> {

}
