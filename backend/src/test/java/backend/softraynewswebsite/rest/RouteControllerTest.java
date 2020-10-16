package backend.softraynewswebsite.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import backend.softraynewswebsite.model.News;
import backend.softraynewswebsite.service.NewsService;

@SuppressWarnings("deprecation")
class RouteControllerTest {
	
	@Autowired
	private RouteController routeController;
	
	private NewsService newsService = mock(NewsService.class);
	
	News news = new News();
	List<News> newsList = new ArrayList<>();
	
	Timestamp date = new Timestamp(new Date().getDate());
	
	@Before(value = "")
    public void init() {
		news.setId(0);
		news.setTitle("title");
		news.setContent("content");
		news.setDate(date);
		newsList.add(news);
		when(newsService.getAllNews()).thenReturn(newsList);
    }
	
	@Disabled
	@Test
	void testGetAllNews() {
		List<News> response = routeController.news();
		assertThat(response.get(0)).hasFieldOrPropertyWithValue("id", 0);
		assertThat(response.get(0)).hasFieldOrPropertyWithValue("title", "title");
		assertThat(response.get(0)).hasFieldOrPropertyWithValue("content", "content");
		assertThat(response.get(0)).hasFieldOrPropertyWithValue("date", date);
	}

}
