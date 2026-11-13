package com.apple.store.model;

import java.math.BigDecimal;

public class Product {
    private String id;
    private String title;
    private String subtitle;
    private String category;
    private BigDecimal price;
    private String monthlyEmi;
    private String badge;

    public Product() {}

    public Product(String id, String title, String subtitle, String category, BigDecimal price, String monthlyEmi, String badge) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.category = category;
        this.price = price;
        this.monthlyEmi = monthlyEmi;
        this.badge = badge;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getSubtitle() { return subtitle; }
    public void setSubtitle(String subtitle) { this.subtitle = subtitle; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }

    public String getMonthlyEmi() { return monthlyEmi; }
    public void setMonthlyEmi(String monthlyEmi) { this.monthlyEmi = monthlyEmi; }

    public String getBadge() { return badge; }
    public void setBadge(String badge) { this.badge = badge; }
}
