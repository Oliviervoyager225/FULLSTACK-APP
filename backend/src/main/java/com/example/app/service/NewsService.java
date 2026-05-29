package com.example.app.service;

import com.example.app.dto.NewsItemResponse;
import java.util.List;

public interface NewsService {
    List<NewsItemResponse> getLatestNews();
}
