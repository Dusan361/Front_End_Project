import { Injectable } from '@angular/core';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsList: News[] = [
    { id: 1, title: "Grand Opening of MikiGym!", content: "Join us for our grand opening event! Enjoy free workouts, special discounts, and exciting giveaways.", date: "March 1, 2025", emoji: "🎉" },
    { id: 2, title: "New Yoga Classes", content: "Morning and evening yoga sessions now available! Relax, stretch, and strengthen your body.", date: "March 5, 2025", emoji: "🧘" },
    { id: 3, title: "20% Off Personal Training", content: "Sign up this month and get an exclusive 20% discount on personal training sessions with our experts.", date: "March 10, 2025", emoji: "💪" },
    { id: 4, title: "Nutrition Workshop", content: "Learn how to create a balanced meal plan with our nutritionists. Limited spots available—sign up today!", date: "March 15, 2025", emoji: "🥗" },
    { id: 5, title: "Summer Fitness Challenge", content: "Join our 8-week challenge and compete for exciting prizes while reaching your fitness goals.", date: "March 20, 2025", emoji: "☀️" },
    { id: 6, title: "24/7 Gym Access", content: "We are now open 24/7! Train anytime that fits your schedule with unlimited access to our facilities.", date: "March 25, 2025", emoji: "🕒" },
    { id: 7, title: "Kids Fitness Program", content: "Enroll your children in our fun and engaging fitness program designed to keep them active and healthy.", date: "March 30, 2025", emoji: "🏃‍♂️" }
  ];

  constructor() { }

  getAllNews(): News[] {
    return this.newsList;
  }
  getNewsById(id: number): News | undefined {
    return this.newsList.find(news => news.id === id);
  }
}