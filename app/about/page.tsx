'use client';

import { Container, Title, Text, Group, Stack, Box, Card } from '@mantine/core';
import Link from 'next/link';
import { IconCode, IconShield, IconRocket, IconSchool } from '@tabler/icons-react';

export default function AboutPage() {
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
              <Text fw={500} c="slate.7">About</Text>
            </Link>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <Text fw={500} c="slate.5">Contact</Text>
            </Link>
          </Group>
        </Group>
      </Container>

      {/* About Content */}
      <Container size="lg" py={60}>
        <Stack gap="xl" maw={900} mx="auto">
          <Box>
            <Title order={1} size="2.5rem" fw={700} c="slate.8" mb="md">
              About Me
            </Title>
          </Box>

          <Card
            shadow="md"
            padding="xl"
            radius="md"
            withBorder
            style={{
              backgroundColor: 'rgba(203, 213, 225, 0.7)',
              borderColor: '#94a3b8',
              borderWidth: '1px',
              backdropFilter: 'blur(20px) saturate(200%)',
              WebkitBackdropFilter: 'blur(20px) saturate(200%)',
              background: 'linear-gradient(135deg, rgba(203, 213, 225, 0.6) 0%, rgba(226, 232, 240, 0.75) 100%)',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
            }}
          >
            <Group gap="md" mb="md">
              <IconCode size={28} color="#475569" />
              <Title order={2} size="h3" fw={600} c="slate.8">
                My Journey
              </Title>
            </Group>
            <Text size="md" c="slate.7" fw={500} style={{ lineHeight: 1.8 }}>
              I started in graphic design in 2021, spending countless hours creating visual designs. But something clicked—I wanted to build applications that could make a real impact, inspired by visionaries like Bill Gates, Elon Musk, and Mark Zuckerberg. After a year of structured learning, I transitioned to self-directed learning and building real projects.
            </Text>
            <Text size="md" c="slate.7" fw={500} style={{ lineHeight: 1.8 }} mt="md">
              What keeps me going is the constant challenge: programming never stops teaching you, and every error is a chance to grow. I love the process of turning ideas into working systems that solve real problems.
            </Text>
          </Card>

          <Card
            shadow="md"
            padding="xl"
            radius="md"
            withBorder
            style={{
              backgroundColor: 'rgba(203, 213, 225, 0.7)',
              borderColor: '#94a3b8',
              borderWidth: '1px',
              backdropFilter: 'blur(20px) saturate(200%)',
              WebkitBackdropFilter: 'blur(20px) saturate(200%)',
              background: 'linear-gradient(135deg, rgba(203, 213, 225, 0.6) 0%, rgba(226, 232, 240, 0.75) 100%)',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
            }}
          >
            <Group gap="md" mb="md">
              <IconRocket size={28} color="#475569" />
              <Title order={2} size="h3" fw={600} c="slate.8">
                What Drives Me
              </Title>
            </Group>
            <Text size="md" c="slate.7" fw={500} style={{ lineHeight: 1.8 }}>
              My primary motivation is creating generational wealth and security for my family—especially ensuring my mother can retire comfortably. I want to build a future where my family lives without financial stress. Beyond that, I'm driven by the desire to build meaningful applications that solve real problems.
            </Text>
            <Text size="md" c="slate.7" fw={500} style={{ lineHeight: 1.8 }} mt="md">
              At the core, I genuinely love programming. The continuous learning, the problem-solving, the growth that comes from every failure—that's what fills me with purpose. I'm passionate about building secure systems. Understanding how systems can be exploited helps me build better defenses from the ground up—security isn't an afterthought, it's foundational to how I architect solutions.
            </Text>
          </Card>

          <Card
            shadow="md"
            padding="xl"
            radius="md"
            withBorder
            style={{
              backgroundColor: 'rgba(203, 213, 225, 0.7)',
              borderColor: '#94a3b8',
              borderWidth: '1px',
              backdropFilter: 'blur(20px) saturate(200%)',
              WebkitBackdropFilter: 'blur(20px) saturate(200%)',
              background: 'linear-gradient(135deg, rgba(203, 213, 225, 0.6) 0%, rgba(226, 232, 240, 0.75) 100%)',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
            }}
          >
            <Group gap="md" mb="md">
              <IconShield size={28} color="#475569" />
              <Title order={2} size="h3" fw={600} c="slate.8">
                My Approach to Building
              </Title>
            </Group>
            <Text size="md" c="slate.7" fw={500} style={{ lineHeight: 1.8 }}>
              I start with architecture-first thinking: before writing code, I design the system—how components interact, data flows, and integration points. My process begins by understanding the client's vision and goals, then researching the optimal tech stack for their specific needs. Once I have clarity, I create a blueprint: architecture, components, integrations, and data flow.
            </Text>
            <Text size="md" c="slate.7" fw={500} style={{ lineHeight: 1.8 }} mt="md">
              What makes my approach different is that I build for reusability and scalability from day one. Whether it's extracting authentication into a standalone service or modernizing legacy systems, I think about how this code will be used beyond the immediate project. I build iteratively, section by section, testing each piece before moving forward. This systems-thinking approach means the infrastructure I build often becomes the foundation for future projects, resulting in solid, maintainable code that doesn't break easily.
            </Text>
          </Card>

          <Card
            shadow="md"
            padding="xl"
            radius="md"
            withBorder
            style={{
              backgroundColor: 'rgba(203, 213, 225, 0.7)',
              borderColor: '#94a3b8',
              borderWidth: '1px',
              backdropFilter: 'blur(20px) saturate(200%)',
              WebkitBackdropFilter: 'blur(20px) saturate(200%)',
              background: 'linear-gradient(135deg, rgba(203, 213, 225, 0.6) 0%, rgba(226, 232, 240, 0.75) 100%)',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
            }}
          >
            <Group gap="md" mb="md">
              <IconSchool size={28} color="#475569" />
              <Title order={2} size="h3" fw={600} c="slate.8">
                Current Work
              </Title>
            </Group>
            <Text size="md" c="slate.7" fw={500} style={{ lineHeight: 1.8 }}>
              I'm currently a full-stack developer at CurableLabs, where I'm modernizing their production AI research platform—converting legacy vanilla HTML/JavaScript systems to modern React + Mantine architecture. I'm also working as a Software Developer and Marketplace Onboarding Specialist at Deep Funding (Singularity Net), where I onboard services onto their marketplace and handle integrations.
            </Text>
            <Text size="md" c="slate.7" fw={500} style={{ lineHeight: 1.8 }} mt="md">
              Alongside my professional work, I'm pursuing my BSc in Information Technology at National Open University of Nigeria, continuously expanding my skillset while building production systems.
            </Text>
          </Card>

          <Card
            shadow="md"
            padding="xl"
            radius="md"
            withBorder
            style={{
              backgroundColor: 'rgba(203, 213, 225, 0.7)',
              borderColor: '#94a3b8',
              borderWidth: '1px',
              backdropFilter: 'blur(20px) saturate(200%)',
              WebkitBackdropFilter: 'blur(20px) saturate(200%)',
              background: 'linear-gradient(135deg, rgba(203, 213, 225, 0.6) 0%, rgba(226, 232, 240, 0.75) 100%)',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
            }}
          >
            <Title order={2} size="h3" fw={600} c="slate.8" mb="md">
              My Vision
            </Title>
            <Text size="md" c="slate.7" fw={500} style={{ lineHeight: 1.8 }}>
              I'm building toward a future where the infrastructure I create powers other applications. Whether it's a reusable authentication service, modernized production platforms, or AI systems that solve real problems, I want to build systems that last and scale.
            </Text>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}

