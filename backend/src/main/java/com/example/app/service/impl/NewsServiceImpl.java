package com.example.app.service.impl;

import com.example.app.dto.NewsItemResponse;
import com.example.app.repository.NewsItemRepository;
import com.example.app.service.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NewsServiceImpl implements NewsService {

    private final NewsItemRepository newsItemRepository;

    @Override
    public List<NewsItemResponse> getLatestNews() {
        return newsItemRepository.findTop6ByOrderByCreatedAtDesc()
                .stream()
                .map(item -> NewsItemResponse.builder()
                        .id(item.getId())
                        .title(item.getTitle())
                        .excerpt(item.getExcerpt())
                        .imageUrl(item.getImageUrl())
                        .linkUrl(item.getLinkUrl())
                        .build())
                .collect(Collectors.toList());
    }
}
