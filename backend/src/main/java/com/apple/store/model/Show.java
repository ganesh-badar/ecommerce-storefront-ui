package com.apple.store.model;

public class Show {
    private String id;
    private String title;
    private String genre;
    private String description;
    private String awards;

    public Show() {}

    public Show(String id, String title, String genre, String description, String awards) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.description = description;
        this.awards = awards;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getGenre() { return genre; }
    public void setGenre(String genre) { this.genre = genre; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getAwards() { return awards; }
    public void setAwards(String awards) { this.awards = awards; }
}
