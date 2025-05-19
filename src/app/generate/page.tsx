'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { GenerateCoverLetter, createWordDocument } from '@/actions/generateCoverLetter'
import { toast } from "react-toastify";
import ReactMarkdown from 'react-markdown'

export default function GeneratePage() {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    experience: '',
    skills: '',
    notes: '',
    email: '',
    phone: '',
  })

  const [isLoading, setIsLoading] = useState(false)
  const [coverLetter, setCoverLetter] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const result = await GenerateCoverLetter(formData)
      setCoverLetter(result.coverLetter)
      toast.success('Cover letter generated successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    } catch (err) {
      setError('Failed to generate cover letter. Please try again.');
      toast.error("Failed to generate cover letter. Please try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = () => {
    if (coverLetter) {
      createWordDocument(coverLetter, formData.position, formData.name);
      toast.success('Cover letter downloaded successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    }
  }

  return (
    <section className="min-h-screen px-6 bg-white dark:bg-gray-950 py-12">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent dark:text-white mb-2">
            Generate Your Cover Letter
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base">
            Fill in the details to create a professional, AI-generated letter.
          </p>
        </div>

        {!coverLetter ? (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Your Full Name</Label>
                <Input id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
              </div>
              <div>
                <Label htmlFor="position">Position Title</Label>
                <Input id="position" value={formData.position} onChange={handleChange} placeholder="Frontend Developer" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" value={formData.company} onChange={handleChange} placeholder="Tech Innovations Inc." required />
              </div>
              <div>
                <Label htmlFor="experience">Years of Experience</Label>
                <Input id="experience" type="number" value={formData.experience} onChange={handleChange} placeholder="3" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 8900" required />
              </div>
            </div>

            <div>
              <Label htmlFor="skills">Key Skills / Technologies</Label>
              <Input id="skills" value={formData.skills} onChange={handleChange} placeholder="React, JavaScript, Tailwind CSS" required />
            </div>

            <div>
              <Label htmlFor="notes">Additional Notes (optional)</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any specifics you'd like the AI to include?"
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Generating...' : 'Generate Cover Letter'}
            </Button>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          </form>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-green-600 dark:text-green-400 font-medium">Cover letter generated successfully!</p>


            {/* ✅ PREVIEW SECTION */}
            <div className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-h-[500px] overflow-y-auto border p-6 rounded-md bg-gray-50 dark:bg-gray-900 shadow">
              <ReactMarkdown>{coverLetter || ''}</ReactMarkdown>
            </div>

            <Button onClick={handleDownload} className="w-full">
              Download as Word Document
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setCoverLetter(null)
                setFormData({
                  name: '',
                  position: '',
                  company: '',
                  experience: '',
                  skills: '',
                  notes: '',
                  email: '',
                  phone: '',
                })
              }}
              className="w-full"
            >
              Generate Another
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
