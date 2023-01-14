package com.example.hh.house;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/houses")
public class HouseController {

    @GetMapping
    public List<House> getAllHouses() {
        List<House> houses = Arrays.asList(
                new House(1L, "na.com", Stage.AWAITING_APPROVAL),
                new House(2L, "na.com", Stage.AWAITING_APPROVAL)
        );
        return houses;
    }
}
