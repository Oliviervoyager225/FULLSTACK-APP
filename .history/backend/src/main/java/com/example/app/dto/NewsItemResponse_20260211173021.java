package com.example.app.dto;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class NewsItemResponse {
    Long id;
    String title;
    String excerpt;
    String imageUrl;
    String linkUrl;
}
