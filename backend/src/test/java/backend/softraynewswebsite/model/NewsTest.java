package backend.softraynewswebsite.model;

import java.util.Date;

import static org.assertj.core.api.Assertions.assertThat;

import java.sql.Timestamp;

import org.junit.jupiter.api.Test;

class NewsTest {

	@Test
	void testNews() {
		News news = new News();
		@SuppressWarnings("deprecation")
		Timestamp date = new Timestamp(new Date().getDate());
		news.setId(0);
		news.setTitle("title");
		news.setContent("content");
		news.setDate(date);
		assertThat(news).hasFieldOrPropertyWithValue("id", 0);
		assertThat(news).hasFieldOrPropertyWithValue("title", "title");
		assertThat(news).hasFieldOrPropertyWithValue("content", "content");
		assertThat(news).hasFieldOrPropertyWithValue("date", date);
	}

	@SuppressWarnings("unused")
	@Test
	void negativeTestNewsEmptyConstructor() {
		News news = new News();
		@SuppressWarnings("deprecation")
		Timestamp date = new Timestamp(new Date().getDate());
		assertThat(news).hasFieldOrPropertyWithValue("id", 0);
		assertThat(news).hasFieldOrPropertyWithValue("title", null);
		assertThat(news).hasFieldOrPropertyWithValue("content", null);
		assertThat(news).hasFieldOrPropertyWithValue("date", null);
	}
}
