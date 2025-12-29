'use client';

import { Container, Title, Text, Group, Stack, Box, Card, Button } from '@mantine/core';
import Link from 'next/link';
import { IconMail, IconPhone, IconBrandWhatsapp } from '@tabler/icons-react';

export default function ContactPage() {
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
              <Text fw={500} c="slate.7">Contact</Text>
            </Link>
          </Group>
        </Group>
      </Container>

      {/* Contact Content */}
      <Container size="lg" py={60}>
        <Stack gap="xl" maw={700} mx="auto">
          <Box>
            <Title order={1} size="2.5rem" fw={700} c="slate.7" mb="md">
              Get In Touch
            </Title>
            <Text size="lg" c="slate.6" style={{ lineHeight: 1.7 }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </Text>
          </Box>

          <Stack gap="md">
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              style={{ backgroundColor: '#cbd5e1', borderColor: '#94a3b8' }}
            >
              <Group gap="md">
                <IconMail size={24} color="#475569" />
                <Stack gap={4}>
                  <Text fw={600} c="slate.7">Email</Text>
                  <Text size="sm" c="slate.6">iyinoluwa150@gmail.com</Text>
                </Stack>
                <Button
                  component="a"
                  href="mailto:iyinoluwa150@gmail.com"
                  variant="outline"
                  color="slate"
                  size="sm"
                  ml="auto"
                >
                  Send Email
                </Button>
              </Group>
            </Card>

            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              style={{ backgroundColor: '#cbd5e1', borderColor: '#94a3b8' }}
            >
              <Group gap="md">
                <IconPhone size={24} color="#475569" />
                <Stack gap={4}>
                  <Text fw={600} c="slate.7">Phone</Text>
                  <Text size="sm" c="slate.6">+234 704 440 0063</Text>
                </Stack>
                <Button
                  component="a"
                  href="tel:+2347044400063"
                  variant="outline"
                  color="slate"
                  size="sm"
                  ml="auto"
                >
                  Call
                </Button>
              </Group>
            </Card>

            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              style={{ backgroundColor: '#cbd5e1', borderColor: '#94a3b8' }}
            >
              <Group gap="md">
                <IconBrandWhatsapp size={24} color="#475569" />
                <Stack gap={4}>
                  <Text fw={600} c="slate.7">WhatsApp</Text>
                  <Text size="sm" c="slate.6">+234 704 440 0063</Text>
                </Stack>
                <Button
                  component="a"
                  href="https://wa.me/2347044400063"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  color="slate"
                  size="sm"
                  ml="auto"
                >
                  Message
                </Button>
              </Group>
            </Card>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

