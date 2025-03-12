import { Injectable } from '@angular/core';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsList: News[] = [
    {
        id: 1,
        title: "Grand Opening of MikiGym!",
        content: "Join us for our grand opening event! Enjoy free workouts, special discounts, and exciting giveaways.",
        date: "March 1, 2025",
        emoji: "🎉",
        imageUrl: "https://cdn.pixabay.com/photo/2024/03/30/19/29/ai-generated-8665327_1280.png",
        moreInfo: "We are thrilled to announce the grand opening of MikiGym! To celebrate, we are offering free trial workouts, exclusive membership discounts, and surprise giveaways. Meet our expert trainers, tour the facility, and experience the best fitness environment in town!"
    },
    {
        id: 2,
        title: "New Yoga Classes",
        content: "Morning and evening yoga sessions now available! Relax, stretch, and strengthen your body.",
        date: "March 5, 2025",
        emoji: "🧘",
        imageUrl: "img/yoga.jpg",
        moreInfo: "Our new yoga classes are designed for all levels—from beginners to advanced practitioners. Morning and evening sessions ensure flexibility in your schedule. Improve your balance, flexibility, and mindfulness with our experienced yoga instructors."
    },
    {
        id: 3,
        title: "20% Off Personal Training",
        content: "Sign up this month and get an exclusive 20% discount on personal training sessions with our experts.",
        date: "March 10, 2025",
        emoji: "💪",
        imageUrl: "img/woman-2260736_1280.jpg",
        moreInfo: "Take your fitness journey to the next level with personalized coaching! Our trainers will create custom workout plans, provide nutritional advice, and ensure you stay motivated. Get 20% off all personal training packages this month only!"
    },
    {
        id: 4,
        title: "Nutrition Workshop",
        content: "Learn how to create a balanced meal plan with our nutritionists. Limited spots available—sign up today!",
        date: "March 15, 2025",
        emoji: "🥗",
        imageUrl: "https://cdn.pixabay.com/photo/2023/11/18/16/09/pears-8396722_1280.jpg",
        moreInfo: "Understanding nutrition is key to achieving your fitness goals. In this workshop, our expert nutritionists will teach you how to build a balanced diet, meal prep effectively, and understand macronutrients. Reserve your spot today!"
    },
    {
        id: 5,
        title: "Summer Fitness Challenge",
        content: "Join our 8-week challenge and compete for exciting prizes while reaching your fitness goals.",
        date: "March 20, 2025",
        emoji: "☀️",
        imageUrl: "https://cdn.pixabay.com/photo/2017/08/06/12/52/woman-2592247_1280.jpg",
        moreInfo: "Get ready for our biggest fitness challenge yet! Over the course of 8 weeks, participants will track their progress, receive expert guidance, and compete for amazing rewards. Whether you're aiming to lose weight, build muscle, or boost endurance, this challenge is for you!"
    },
    {
        id: 6,
        title: "24/7 Gym Access",
        content: "We are now open 24/7! Train anytime that fits your schedule with unlimited access to our facilities.",
        date: "March 25, 2025",
        emoji: "🕒",
        imageUrl: "img/gymBackground.jpg",
        moreInfo: "We know that life is busy—that’s why we’ve made MikiGym accessible 24/7! Whether you prefer early morning workouts or late-night training sessions, our doors are always open for you. Enjoy full access to all facilities anytime!"
    },
    {
        id: 7,
        title: "Kids Fitness Program",
        content: "Enroll your children in our fun and engaging fitness program designed to keep them active and healthy.",
        date: "March 30, 2025",
        emoji: "🏃‍♂️",
        imageUrl: "https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_1280.jpg",
        moreInfo: "Encourage your kids to stay active with our specialized fitness program designed for children! We focus on fun workouts, agility drills, and team activities that build strength, coordination, and confidence in a safe and supportive environment."
    }
];


  constructor() { }

  getAllNews(): News[] {
    return this.newsList;
  }
  getNewsById(id: number): News | undefined {
    return this.newsList.find(news => news.id === id);
  }
}