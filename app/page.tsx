'use client';

import { Container, Title, Text, Button, Group, Stack, Box } from '@mantine/core';
import Link from 'next/link';
import { IconBrandGithub, IconMail, IconPhone } from '@tabler/icons-react';

export default function Home() {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#94a3b8' }}>
      {/* Navigation */}
      <Container size="lg" py="md">
        <Group justify="space-between">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Title order={3} c="slate.7">AJ</Title>
          </Link>
          <Group gap="md">
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Text fw={500} c="slate.5">Home</Text>
            </Link>
            <Link href="/projects" style={{ textDecoration: 'none' }}>
              <Text fw={500} c="slate.5">Projects</Text>
            </Link>
            <Link href="/about" style={{ textDecoration: 'none' }}>
              <Text fw={500} c="slate.5">About</Text>
            </Link>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <Text fw={500} c="slate.5">Contact</Text>
            </Link>
          </Group>
        </Group>
      </Container>

      {/* Hero Section */}
      <Container size="lg" py={80}>
        <Stack gap="xl" align="center" style={{ textAlign: 'center' }}>
          <Title 
            order={1} 
            size="3.5rem" 
            fw={700} 
            c="slate.7"
            style={{ lineHeight: 1.2 }}
          >
            Ade-williams Joshua
          </Title>
          <Title 
            order={2} 
            size="1.5rem" 
            fw={400} 
            c="slate.5"
            style={{ lineHeight: 1.5 }}
          >
            Full-Stack Developer & AI Engineer
          </Title>
          <Text 
            size="lg" 
            c="slate.6" 
            maw={600}
            style={{ lineHeight: 1.6 }}
          >
            Building Reusable Infrastructure & Modernizing Production Systems
          </Text>
          
          <Text 
            size="md" 
            c="slate.6" 
            maw={700}
            style={{ lineHeight: 1.7 }}
          >
            Rapidly growing full-stack developer specializing in building reusable infrastructure and modernizing production systems. Currently contributing to AI research platforms while continuously expanding my skillset.
          </Text>

          <Group gap="md" mt="xl">
            <Link href="/projects" style={{ textDecoration: 'none' }}>
              <Button 
                size="lg"
                color="slate"
                variant="filled"
                radius="md"
              >
                View My Work
              </Button>
            </Link>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <Button 
                size="lg"
                color="slate"
                variant="outline"
                radius="md"
              >
                Get In Touch
              </Button>
            </Link>
          </Group>

          {/* Skills Showcase */}
          <Box mt={60} w="100%">
            <Text size="sm" fw={600} c="slate.6" mb="md" ta="center">
              Technologies I Work With
            </Text>
            <Group gap="xl" justify="center">
              <Text size="sm" c="slate.5" fw={500}>React</Text>
              <Text size="sm" c="slate.5" fw={500}>Next.js</Text>
              <Text size="sm" c="slate.5" fw={500}>Python</Text>
              <Text size="sm" c="slate.5" fw={500}>Rust</Text>
              <Text size="sm" c="slate.5" fw={500}>AI/ML</Text>
              <Text size="sm" c="slate.5" fw={500}>TypeScript</Text>
            </Group>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
