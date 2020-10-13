package backend.softraynewswebsite.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import backend.softraynewswebsite.model.News;
import backend.softraynewswebsite.service.NewsService;

@CrossOrigin
@RestController
public class RouteController{
	
	@Autowired
	NewsService newsService;

	@GetMapping("/login")
	public String login(){
		return("/login");
	}

	@RequestMapping("/allnews")
	public List<News> news(){
		return(newsService.getAllNews());
	}

	@RequestMapping("/news/{id}")
	public News news(@PathVariable int id){
		return(newsService.getNewsById(id));
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/news")
	public void addNews(@RequestBody News news){
		newsService.addNews(news);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/news/{id}")
	public void updateNews(@RequestBody News news, @PathVariable int id){
		newsService.updateNews(id, news);
	}

}
