package com.example.hh.house;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class House {
    private Long id;
    private String url;
    private Stage stage;
}
