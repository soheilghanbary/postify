import { prisma } from "@/server/db";
import { faker } from '@faker-js/faker';

// prisma/seed.js
const postsData = [
  {
    "title": faker.lorem.sentence(),
    "url": faker.internet.url(),
    "content": faker.lorem.paragraph(),
    "userId": 'cm5k24q8l0000uhr2e9vm1c76'
  },
  {
    "title": faker.lorem.sentence(),
    "url": faker.internet.url(),
    "content": faker.lorem.paragraph(),
    "userId": 'cm5k24q8l0000uhr2e9vm1c76'
  },
  {
    "title": faker.lorem.sentence(),
    "url": faker.internet.url(),
    "content": faker.lorem.paragraph(),
    "userId": 'cm5k24q8l0000uhr2e9vm1c76'
  },
  {
    "title": faker.lorem.sentence(),
    "url": faker.internet.url(),
    "content": faker.lorem.paragraph(),
    "userId": 'cm5k24q8l0000uhr2e9vm1c76'
  },
  {
    "title": faker.lorem.sentence(),
    "url": faker.internet.url(),
    "content": faker.lorem.paragraph(),
    "userId": 'cm5k24q8l0000uhr2e9vm1c76'
  },
  {
    "title": faker.lorem.sentence(),
    "url": faker.internet.url(),
    "content": faker.lorem.paragraph(),
    "userId": 'cm5k24q8l0000uhr2e9vm1c76'
  },
  {
    "title": faker.lorem.sentence(),
    "url": faker.internet.url(),
    "content": faker.lorem.paragraph(),
    "userId": 'cm5k24q8l0000uhr2e9vm1c76'
  },
  {
    "title": faker.lorem.sentence(),
    "url": faker.internet.url(),
    "content": faker.lorem.paragraph(),
    "userId": 'cm5k24q8l0000uhr2e9vm1c76'
  },
  {
    "title": faker.lorem.sentence(),
    "url": faker.internet.url(),
    "content": faker.lorem.paragraph(),
    "userId": 'cm5k24q8l0000uhr2e9vm1c76'
  },
  {
    "title": faker.lorem.sentence(),
    "url": faker.internet.url(),
    "content": faker.lorem.paragraph(),
    "userId": 'cm5k24q8l0000uhr2e9vm1c76'
  },
  {
    "title": faker.lorem.sentence(),
    "url": faker.internet.url(),
    "content": faker.lorem.paragraph(),
    "userId": 'cm5k24q8l0000uhr2e9vm1c76'
  },
  {
    "title": faker.lorem.sentence(),
    "url": faker.internet.url(),
    "content": faker.lorem.paragraph(),
    "userId": 'cm5k24q8l0000uhr2e9vm1c76'
  },
  {
    "title": faker.lorem.sentence(),
    "url": faker.internet.url(),
    "content": faker.lorem.paragraph(),
    "userId": 'cm5k24q8l0000uhr2e9vm1c76'
  },
  {
    "title": faker.lorem.sentence(),
    "url": faker.internet.url(),
    "content": faker.lorem.paragraph(),
    "userId": 'cm5k24q8l0000uhr2e9vm1c76'
  },
  {
    "title": faker.lorem.sentence(),
    "url": faker.internet.url(),
    "content": faker.lorem.paragraph(),
    "userId": 'cm5k24q8l0000uhr2e9vm1c76'
  },
  {
    "title": faker.lorem.sentence(),
    "url": faker.internet.url(),
    "content": faker.lorem.paragraph(),
    "userId": 'cm5k24q8l0000uhr2e9vm1c76'
  },
  {
    "title": faker.lorem.sentence(),
    "url": faker.internet.url(),
    "content": faker.lorem.paragraph(),
    "userId": 'cm5k24q8l0000uhr2e9vm1c76'
  },
  {
    "title": faker.lorem.sentence(),
    "url": faker.internet.url(),
    "content": faker.lorem.paragraph(),
    "userId": 'cm5k24q8l0000uhr2e9vm1c76'
  },
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