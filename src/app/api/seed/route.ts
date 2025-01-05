import { prisma } from "@/server/db";
import { faker } from '@faker-js/faker';

const userId = 'cm5jqm81p0000uhr2qbvvhyn1'

const postsData = [
  {
    title: faker.lorem.sentence(),
    url: faker.internet.url(),
    content: faker.lorem.paragraph(),
    userId
  }
]

for (let i = 0; i < 10; i++) {
  postsData.push({
    title: faker.lorem.sentence(),
    url: faker.internet.url(),
    content: faker.lorem.paragraph(),
    userId
  });
}

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