package com.apple.store.controller;

import com.apple.store.model.Product;
import com.apple.store.model.Show;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class StoreApiController {

    private final List<Product> products = new ArrayList<>();
    private final List<Show> shows = new ArrayList<>();

    public StoreApiController() {
        // Initialize products directly from the design specification .md
        products.add(new Product("iphone-duo", "iPhone Duo", "Hello, hello.", "iPhone", new BigDecimal("79900"), "₹13,317/mo", "New"));
        products.add(new Product("macbook-pro", "MacBook Pro", "PROLED XDR Display", "Mac", new BigDecimal("169900"), "₹28,317/mo", "Powerhouse"));
        products.add(new Product("iphone-18-pro", "iPhone 18 Pro", "Pro further.", "iPhone", new BigDecimal("134900"), "₹22,483/mo", "Grade 5 Titanium"));
        products.add(new Product("watch-s12", "Apple Watch Series 12", "The most accurate heart rate sensing in a wearable.1", "Watch", new BigDecimal("46900"), "₹7,817/mo", "Flagship"));
        products.add(new Product("ipad-a16", "iPad", "Now with the speed of the A16 chip and double the starting storage.", "iPad", new BigDecimal("34900"), "₹5,817/mo", "Popular"));
        products.add(new Product("airpods-pro-3", "AirPods Pro 3", "The world’s best in-ear Active Noise Cancellation.", "AirPods", new BigDecimal("24900"), "₹4,150/mo", "Acoustics"));
        products.add(new Product("macbook-air-m5", "MacBook Air", "Now supercharged by M5.", "Mac", new BigDecimal("114900"), "₹19,150/mo", "Ultra-Lightweight"));
        products.add(new Product("ipad-mini", "iPad mini", "More than a little awesome.", "iPad", new BigDecimal("49900"), "₹8,317/mo", "Compact Power"));

        // Initialize Apple TV+ originals directly from the design specification .md
        shows.add(new Show("pluribus", "Pluribus", "Drama", "Happiness is a state of mind.", "Official Selection"));
        shows.add(new Show("monarch", "Monarch: Legacy of Monsters", "Adventure", "A new threat will surface.", "Visual Effects Nominee"));
        shows.add(new Show("the-studio", "The Studio", "Comedy", "Winner of 13 Emmy® Awards", "13 Emmy Awards"));
        shows.add(new Show("severance", "Severance", "Thriller", "Winner of 8 Emmy® Awards", "8 Emmy Awards"));
        shows.add(new Show("hijack", "Hijack", "Thriller", "Who can you trust when it's all on the line?", "Hit Series"));
        shows.add(new Show("f1", "F1 The Movie", "Action", "Let’s ride.", "Theatrical Original"));
        shows.add(new Show("slow-horses", "Slow Horses", "Thriller", "Emmy® Award Winner", "Emmy Award Winner"));
        shows.add(new Show("the-morning-show", "The Morning Show", "Drama", "The truth is the top story.", "Golden Globe Nominee"));
        shows.add(new Show("shrinking", "Shrinking", "Comedy", "Getting it together. Together.", "Critics Choice Nominee"));
    }

    @GetMapping("/products")
    public List<Product> getProducts() {
        return products;
    }

    @GetMapping("/products/{id}")
    public Optional<Product> getProductById(@PathVariable String id) {
        return products.stream().filter(p -> p.getId().equalsIgnoreCase(id)).findFirst();
    }

    @GetMapping("/shows")
    public List<Show> getShows() {
        return shows;
    }

    @PostMapping("/trade-in/estimate")
    public Map<String, Object> calculateTradeInEstimate(@RequestBody Map<String, String> request) {
        String device = request.getOrDefault("device", "iPhone");
        Map<String, Object> response = new HashMap<>();
        response.put("device", device);
        response.put("estimatedCredit", "₹42,500");
        response.put("currency", "INR");
        response.put("status", "VALIDATED");
        return response;
    }
}
