package backend.softraynewswebsite.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.softraynewswebsite.model.News;
import backend.softraynewswebsite.repository.NewsRepository;

@Service
public class NewsService{
	
	@Autowired
	private NewsRepository newsRepository;
	
	public List<News> getAllNews(){
		List<News> news = new ArrayList<>();
		newsRepository.findAll().forEach(news::add);
		return news;
	}
	
	public News getNewsById(int id){
		return newsRepository.findById(id).get();
	}
	
	public void addNews(News news){
		newsRepository.save(news);
	}
	
	public void updateNews(int id, News news){
		newsRepository.save(news);
	}
	
}
