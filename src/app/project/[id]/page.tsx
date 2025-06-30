import React from 'react';
import { ArrowLeft, Github, Linkedin, Youtube } from 'lucide-react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectById } from '@/data/projects';

interface Params {
  id?: string;
}

export default function ProjectDetailPage({ params }: { params: Params }) {
  const id = params.id;
  const project = id ? getProjectById(id) : null;

  if (!project) notFound();

  // Logic to check for each link's existence
  const hasGitHub = project.github && project.github !== '#';
  const hasLinkedIn = project.linkedin && project.linkedin !== '#';
  const hasDemo = project.demo && project.demo !== '#';

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-zinc-400 text-lg mb-8">{project.description}</p>

          {/* Container for all external link buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {hasGitHub && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 text-white rounded-lg font-medium hover:bg-zinc-700 transition-colors">
                <Github className="w-4 h-4" /> View Source
              </a>
            )}
            {hasLinkedIn && (
              <a href={project.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-colors">
                <Linkedin className="w-4 h-4" /> View Post
              </a>
            )}
            {hasDemo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-500 transition-colors">
                <Youtube className="w-4 h-4" /> Watch Demo
              </a>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-zinc-900/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
              {/* Using a div with whitespace-pre-line for better control over paragraphs */}
              <div className="prose prose-invert max-w-none text-zinc-400 space-y-4 whitespace-pre-line">
                {project.fullDescription}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-zinc-900/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => <span key={idx} className="px-3 py-1 bg-zinc-800 rounded-full text-sm">{tech}</span>)}
              </div>
            </div>
            <div className="bg-zinc-900/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Key Results</h2>
              <ul className="space-y-2">
                {project.results.map((res, idx) => <li key={idx} className="flex items-start gap-3 text-zinc-400"><span className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 flex-shrink-0" />{res}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}