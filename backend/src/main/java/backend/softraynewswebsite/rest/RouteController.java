package backend.softraynewswebsite.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import backend.softraynewswebsite.model.News;
import backend.softraynewswebsite.model.User;
import backend.softraynewswebsite.service.NewsService;

@CrossOrigin
@RestController
public class RouteController{
	
    Logger LOGGER = LoggerFactory.getLogger(RouteController.class);
	
	@Autowired
	NewsService newsService;

	@RequestMapping(method=RequestMethod.POST, value="/login")
	public String login(@RequestBody User user){
		if(user.getUsername().equals("admin") && user.getPassword().equals("admin"))
			return "admin";
		return "wrong credentials";
	}

	@RequestMapping("/allnews")
	public List<News> news(){
		LOGGER.info("Fetching all news...");
		return(newsService.getAllNews());
	}

	@RequestMapping("/news/{id}")
	public News news(@PathVariable int id){
		LOGGER.info("Fetching news with id [{}] ...", id);
		return(newsService.getNewsById(id));
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/news")
	public News addNews(@RequestBody News news){
		newsService.addNews(news);
		LOGGER.info("Adding news...");
		return news;
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/news/{id}")
	public News updateNews(@RequestBody News news, @PathVariable int id){
		LOGGER.info("Updating news with id [{}] ...", id);
		newsService.updateNews(id, news);
		return news;
	}

}
