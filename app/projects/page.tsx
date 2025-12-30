'use client';

import { Container, Title, Text, Group, Stack, Box, Card, Badge, Button, SimpleGrid } from '@mantine/core';
import Link from 'next/link';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';

// Projects data - easily expandable
const projects = [
  {
    id: 1,
    name: 'Emotion Detection API',
    description: 'A production-ready emotion detection API that analyzes facial expressions in real-time with 78.8% accuracy. Built with Python, Flask, and PyTorch.',
    tech: ['Python', 'Flask', 'PyTorch', 'Computer Vision'],
    github: 'https://github.com/iyinoluwAA/Emotion-detection',
    demo: 'https://emotion-detection-ecru.vercel.app',
    status: 'Production-ready',
    features: ['Real-time facial emotion recognition', '78.8% accuracy', 'RESTful API', 'Production deployment'],
  },
  {
    id: 2,
    name: 'Ascend - AI Study Assistant',
    description: 'An AI-powered adaptive learning platform built with Rust (Axum) backend and Next.js frontend. Helps you learn faster through personalized learning paths, spaced repetition, and intelligent quiz generation.',
    tech: ['Rust', 'Axum', 'Next.js', 'React', 'TypeScript', 'Mantine UI', 'SQLite', 'Groq API'],
    github: 'https://github.com/iyinoluwAA/ascend',
    demo: null,
    status: 'Web application functional',
    features: ['Full-stack web app', 'Course management', 'Document parsing', 'Progress tracking', 'AI integration'],
  },
  {
    id: 3,
    name: 'Esquie - Multi-Transcriber',
    description: 'A powerful, system-level transcription platform built in Rust. CLI fully functional with parallel processing, automatic chunking, and robust error handling.',
    tech: ['Rust', 'yt-dlp', 'ffmpeg', 'Whisper'],
    github: 'https://github.com/iyinoluwAA/Esquie',
    demo: null,
    status: 'CLI fully functional',
    features: ['Multi-format audio processing', 'Parallel processing', 'Automatic chunking', 'System-level integration'],
  },
  {
    id: 4,
    name: 'CurableLabs Platform Modernization',
    description: 'Contributing to the modernization of CurableLabs, an AI-powered Parkinson\'s Disease research platform. Converting legacy vanilla HTML/JavaScript systems to modern React + Mantine architecture.',
    tech: ['React', 'Mantine UI', 'TypeScript', 'Node.js', 'Express'],
    github: null,
    demo: null,
    status: 'Active contribution',
    features: ['Legacy system modernization', 'React + Mantine UI conversion', 'TypeScript implementation', '97-agent AI system'],
  },
  {
    id: 5,
    name: 'Axum Full Backend System',
    description: 'A complete, production-ready RESTful API backend built with Rust and Axum. Includes full user authentication, email verification, password management, and role-based access control.',
    tech: ['Rust', 'Axum', 'PostgreSQL', 'JWT'],
    github: 'https://github.com/iyinoluwAA/Axum_full_backend',
    demo: null,
    status: 'Production-ready',
    features: ['User authentication', 'Email verification', 'Password reset', 'Role-based access control', 'RESTful API'],
  },
];

export default function ProjectsPage() {
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
              <Text fw={500} c="slate.7">Projects</Text>
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

      {/* Projects Section */}
      <Container size="lg" py={60}>
        <Stack gap="xl">
          <Box
            style={{
              backgroundColor: '#cbd5e1',
              border: '1px solid #94a3b8',
              borderRadius: '8px',
              padding: '24px',
            }}
          >
            <Title order={1} size="2.5rem" fw={700} c="slate.8" mb="md">
              My Projects
            </Title>
            <Text size="lg" c="slate.7" fw={500} maw={700}>
              A collection of projects showcasing my work in full-stack development, AI/ML, and systems programming.
            </Text>
          </Box>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} spacing="xl">
            {projects.map((project) => (
              <Card
                key={project.id}
                shadow="md"
                padding="lg"
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
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitFontSmoothing: 'antialiased',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px) translateZ(0)';
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)';
                  e.currentTarget.style.borderColor = '#64748b';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) translateZ(0)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = '#94a3b8';
                }}
              >
                <Stack gap="md">
                  <Group justify="space-between" align="flex-start">
                    <Title order={3} size="h3" c="slate.8" fw={700}>
                      {project.name}
                    </Title>
                    <Badge color="slate" variant="light" size="sm">
                      {project.status}
                    </Badge>
                  </Group>

                  <Text size="sm" c="slate.7" fw={500} style={{ lineHeight: 1.6 }}>
                    {project.description}
                  </Text>

                  <Box>
                    <Text size="xs" fw={700} c="slate.7" mb="xs">Technologies:</Text>
                    <Group gap="xs">
                      {project.tech.map((tech) => (
                        <Badge key={tech} color="slate" variant="outline" size="xs">
                          {tech}
                        </Badge>
                      ))}
                    </Group>
                  </Box>

                  <Box>
                    <Text size="xs" fw={700} c="slate.7" mb="xs">Key Features:</Text>
                    <Stack gap={4}>
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <Text key={idx} size="xs" c="slate.7" fw={500}>
                          • {feature}
                        </Text>
                      ))}
                      {project.features.length > 3 && (
                        <Text size="xs" c="slate.6" fw={500}>
                          + {project.features.length - 3} more
                        </Text>
                      )}
                    </Stack>
                  </Box>

                  <Group gap="sm" mt="auto">
                    {project.github && (
                      <Button
                        component="a"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        leftSection={<IconBrandGithub size={16} />}
                        variant="outline"
                        color="slate"
                        size="sm"
                      >
                        GitHub
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        component="a"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        leftSection={<IconExternalLink size={16} />}
                        variant="filled"
                        color="slate"
                        size="sm"
                      >
                        Live Demo
                      </Button>
                    )}
                    {!project.github && !project.demo && (
                      <Text size="xs" c="slate.5" fs="italic">
                        Proprietary codebase
                      </Text>
                    )}
                  </Group>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}

