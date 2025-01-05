import { prisma } from "@/server/db";

// prisma/seed.js
const postsData = [
  {
    "title": "My First Post",
    "url": "https://example.com/post1",
    "content": "This is my very first post!",
    "userId": "cm5k24q8l0000uhr2e9vm1c76"
  },
  {
    "title": "Exciting News!",
    "url": "https://example.com/post2",
    "content": "I have some big news to share...",
    "userId": "cm5k24q8l0000uhr2e9vm1c76"
  },
  {
    "title": "Weekend Adventures",
    "url": "https://example.com/post3",
    "content": "Sharing some photos from my weekend trip.",
    "userId": "cm5k24q8l0000uhr2e9vm1c76"
  },
  {
    "title": "Thoughts on Life",
    "url": "https://example.com/post4",
    "content": "Reflecting on life and its many lessons.",
    "userId": "cm5k24q8l0000uhr2e9vm1c76"
  },
  {
    "title": "Favorite Recipe",
    "url": "https://example.com/post5",
    "content": "Sharing my go-to recipe for [dish name].",
    "userId": "cm5k24q8l0000uhr2e9vm1c76"
  },
  {
    "title": "Book Recommendation",
    "url": "https://example.com/post6",
    "content": "I highly recommend reading [book title].",
    "userId": "cm5k24q8l0000uhr2e9vm1c76"
  },
  {
    "title": "Travel Plans",
    "url": "https://example.com/post7",
    "content": "I'm planning a trip to [destination]!",
    "userId": "cm5k24q8l0000uhr2e9vm1c76"
  },
  {
    "title": "Movie Review",
    "url": "https://example.com/post8",
    "content": "My thoughts on the latest movie I saw.",
    "userId": "cm5k24q8l0000uhr2e9vm1c76"
  },
  {
    "title": "Daily Gratitude",
    "url": "https://example.com/post9",
    "content": "Today I'm grateful for [things I'm grateful for].",
    "userId": "cm5k24q8l0000uhr2e9vm1c76"
  },
  {
    "title": "Quote of the Day",
    "url": "https://example.com/post10",
    "content": "“A quote that inspires me today.”",
    "userId": "cm5k24q8l0000uhr2e9vm1c76"
  }
]

export const GET = async () => {
  async function main() {
    for (const postData of postsData) {
      await prisma.post.create({ data: postData });
    }
  }
  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
  return Response.json({ msg: 'hello from seed' })
}