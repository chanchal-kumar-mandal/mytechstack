import React, { useState } from 'react';
import { 
  User, 
  Terminal, 
  Code2, 
  Atom, 
  Cpu, 
  TestTube2, 
  Globe, 
  Palette, 
  Triangle, 
  Plus, 
  Trash2, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Menu,
  X
} from 'lucide-react';
import { Logo } from './components/Logo';

interface QAItem {
  id: string;
  question: string;
  answer: string;
  codeSnippet?: string;
}

interface TopicData {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  questions: QAItem[];
}

interface ProfileData {
  name: string;
  designation: string;
  resumeUrl: string;
  linkedinUrl: string;
}

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('javascript');

  // Profile State
  const [profile] = useState<ProfileData>({
    name: 'Alex Johnson',
    designation: 'Frontend Engineer',
    resumeUrl: 'https://example.com/resume.pdf',
    linkedinUrl: 'https://linkedin.com/in/alex-johnson',
  });

  // Topics & Q&A State
  const [topics, setTopics] = useState<Record<string, TopicData>>({
    javascript: {
      id: 'javascript',
      title: 'Javascript',
      icon: <Terminal className="text-amber-500" size={20} />,
      description: 'Core concepts, ES6+, asynchronous programming, and closures.',
      questions: [
        {
          id: 'js-1',
          question: 'What is a closure in JavaScript?',
          answer: 'A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).',
          codeSnippet: 'function makeCounter() {\n  let count = 0;\n  return function() {\n    return count++;\n  };\n}'
        }
      ]
    },
    typescript: {
      id: 'typescript',
      title: 'TypeScript',
      icon: <Code2 className="text-blue-500" size={20} />,
      description: 'Static typing, interfaces, types, and generics.',
      questions: [
        {
          id: 'ts-1',
          question: 'What is the difference between interface and type?',
          answer: 'Interfaces are primarily used to describe shapes of objects and can be merged. Type aliases can represent primitives, unions, and tuples.'
        }
      ]
    },
    reactjs: {
      id: 'reactjs',
      title: 'React.js',
      icon: <Atom className="text-cyan-500" size={20} />,
      description: 'Component lifecycle, hooks, context, and performance optimization.',
      questions: [
        {
          id: 'react-1',
          question: 'Why do we use useMemo hook?',
          answer: 'useMemo is used to cache the result of a calculation between re-renders to avoid expensive recalculations.'
        }
      ]
    },
    redux: {
      id: 'redux',
      title: 'Redux',
      icon: <Cpu className="text-purple-500" size={20} />,
      description: 'Global state management, slices, actions, and reducers.',
      questions: [
        {
          id: 'redux-1',
          question: 'What is Redux Toolkit?',
          answer: 'Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development.'
        }
      ]
    },
    unittestcases: {
      id: 'unittestcases',
      title: 'Unit Test Cases',
      icon: <TestTube2 className="text-emerald-500" size={20} />,
      description: 'Testing React components with Jest and React Testing Library.',
      questions: [
        {
          id: 'test-1',
          question: 'What is screen.getByRole vs screen.queryByRole?',
          answer: 'getByRole throws an error if the element is not found, whereas queryByRole returns null.'
        }
      ]
    },
    html: {
      id: 'html',
      title: 'HTML',
      icon: <Globe className="text-orange-500" size={20} />,
      description: 'Semantic markup, accessibility, and modern structural tags.',
      questions: [
        {
          id: 'html-1',
          question: 'What are semantic HTML elements?',
          answer: 'Semantic elements clearly describe their meaning to both the browser and the developer (e.g., <header>, <article>, <footer>).'
        }
      ]
    },
    css: {
      id: 'css',
      title: 'CSS',
      icon: <Palette className="text-pink-500" size={20} />,
      description: 'Flexbox, Grid, animations, and responsive styling.',
      questions: [
        {
          id: 'css-1',
          question: 'Explain CSS Grid vs Flexbox.',
          answer: 'Flexbox is designed for one-dimensional layouts (row or column), while Grid is designed for two-dimensional layouts simultaneously.'
        }
      ]
    },
    nextjs: {
      id: 'nextjs',
      title: 'Next.js',
      icon: <Triangle className="text-slate-900" size={20} />,
      description: 'Server-side rendering, App Router, and dynamic routing.',
      questions: [
        {
          id: 'next-1',
          question: 'What is Server Component rendering?',
          answer: 'React Server Components allow rendering components on the server, reducing bundle size sent to the client.'
        }
      ]
    }
  });

  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // New Question Form State
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [newCode, setNewCode] = useState('');

  const handleAddQuestion = (e: React.FormEvent, topicId: string) => {
    e.preventDefault();
    if (!newQuestion.trim() || !newAnswer.trim()) return;

    const newItem: QAItem = {
      id: `q-${Date.now()}`,
      question: newQuestion,
      answer: newAnswer,
      codeSnippet: newCode.trim() ? newCode : undefined,
    };

    setTopics(prev => ({
      ...prev,
      [topicId]: {
        ...prev[topicId],
        questions: [...prev[topicId].questions, newItem]
      }
    }));

    setNewQuestion('');
    setNewAnswer('');
    setNewCode('');
  };

  const handleDeleteQuestion = (topicId: string, qId: string) => {
    setTopics(prev => ({
      ...prev,
      [topicId]: {
        ...prev[topicId],
        questions: prev[topicId].questions.filter(q => q.id !== qId)
      }
    }));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 flex flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-16 items-center justify-between px-6 border-b border-slate-100">
          <Logo />
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-500 hover:text-slate-900">
            <X size={20} />
          </button>
        </div>

        {/* Profile Details Box inside Nav */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/60">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold shadow-sm shadow-indigo-200">
              <User size={20} />
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-slate-900 truncate">{profile.name}</p>
              <p className="text-xs font-medium text-indigo-600 truncate">{profile.designation}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-lg bg-slate-900 py-2 text-xs font-medium text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              View Resume <ExternalLink size={12} />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 py-2 text-xs font-medium text-white hover:bg-blue-700 transition-colors shadow-sm"
            >
              LinkedIn Profile <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Topics Tree Navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            🚀 Topics
          </div>
          <div className="space-y-1">
            {Object.values(topics).map(topic => (
              <button
                key={topic.id}
                onClick={() => { setActiveTab(topic.id); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                  activeTab === topic.id 
                    ? 'bg-indigo-50 text-indigo-600 shadow-sm shadow-indigo-100' 
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {topic.icon}
                <span>{topic.title}</span>
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Header */}
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
            >
              <Menu size={20} />
            </button>
            <h1 className="text-lg font-bold text-slate-800 capitalize">
              {topics[activeTab]?.title}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
              Frontend Mode
            </span>
          </div>
        </header>

        {/* Dynamic View Area */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="mx-auto max-w-4xl space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-indigo-50">
                  {topics[activeTab]?.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{topics[activeTab]?.title}</h2>
                  <p className="text-sm text-slate-500">{topics[activeTab]?.description}</p>
                </div>
              </div>
            </div>

            {/* Accordion Questions List */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 px-1">Questions & Answers</h3>
              {topics[activeTab]?.questions.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
                  No questions added yet. Use the form below to add one.
                </div>
              ) : (
                topics[activeTab]?.questions.map((item) => {
                  const isOpen = openAccordion === item.id;
                  return (
                    <div key={item.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all">
                      <button
                        onClick={() => setOpenAccordion(isOpen ? null : item.id)}
                        className="flex w-full items-center justify-between p-5 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-xs font-bold text-indigo-600">Q</span>
                          {item.question}
                        </span>
                        <div className="text-slate-400">
                          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="border-t border-slate-100 bg-slate-50/50 p-5 space-y-4 animate-fadeIn">
                          <p className="text-sm leading-relaxed text-slate-600">{item.answer}</p>
                          {item.codeSnippet && (
                            <pre className="overflow-x-auto rounded-xl bg-slate-900 p-4 text-xs font-mono text-indigo-300">
                              <code>{item.codeSnippet}</code>
                            </pre>
                          )}
                          <div className="flex justify-end pt-2">
                            <button
                              onClick={() => handleDeleteQuestion(activeTab, item.id)}
                              className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors"
                            >
                              <Trash2 size={14} /> Delete Question
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Add New Question Form */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mt-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Add New Question</h3>
              <form onSubmit={(e) => handleAddQuestion(e, activeTab)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Question</label>
                  <input
                    type="text"
                    value={newQuestion}
                    onChange={e => setNewQuestion(e.target.value)}
                    placeholder="e.g., What is useEffect cleanup function?"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Answer</label>
                  <textarea
                    value={newAnswer}
                    onChange={e => setNewAnswer(e.target.value)}
                    placeholder="Provide detailed answer description..."
                    rows={3}
                    required
                    className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Code Snippet (Optional)</label>
                  <textarea
                    value={newCode}
                    onChange={e => setNewCode(e.target.value)}
                    placeholder="const [state, setState] = useState(0);"
                    rows={2}
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-900 font-mono text-xs text-indigo-300 px-4 py-2.5 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 shadow-md shadow-indigo-500/20 transition-all"
                >
                  <Plus size={16} /> Add Question
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}