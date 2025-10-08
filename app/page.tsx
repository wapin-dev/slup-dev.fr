'use client'

import { useState } from 'react'
import Image from 'next/image'
import { 
  Code, 
  Smartphone, 
  RefreshCw, 
  Search, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Zap,
  Shield,
  Clock
} from 'lucide-react'

export default function BentoHome() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-25">
    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/40 rounded-full blur-3xl"></div>
    <div className="absolute top-40 right-32 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"></div>
    <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-indigo-400/35 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-300/40 rounded-full blur-3xl"></div>
  </div>
      
      {/* Bento Grid */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          
        {/* Hero Card - Enhanced */}
        <div className="md:col-span-4 lg:col-span-4 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 min-h-[400px] flex flex-col justify-between">
            <div>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-medium text-blue-100">Développement Web & Mobile</div>
                </div>
                <div className="hidden lg:block">
                <Image src="/logo.png" alt="SlupDev" width={80} height={80} className="rounded-2xl opacity-60" />
                </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black mb-4">
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">SlupDev</span>
                <span className="block text-2xl lg:text-3xl font-normal text-blue-200 mt-2">Votre Partenaire Digital</span>
            </h1>
            
            <p className="text-lg text-blue-100 mb-8 max-w-2xl" style={{color: "white"}}>
                Nous transformons vos idées en solutions digitales performantes. Sites web, apps mobiles et SEO.
            </p>
            </div>
            
            <div className="space-y-6">
            <div className="flex gap-4 text-sm text-blue-200">
                <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                Devis gratuit
                </div>
                <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                Réponse 24h
                </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center">
                Démarrer mon projet
                <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="#services" className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all">
                Nos services
                </a>
            </div>
            </div>
        </div>
        </div>

        {/* Stats Card - Enhanced */}
        <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 shadow-sm border border-blue-100">
        <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pourquoi SlupDev ?</h3>
            <p className="text-sm text-gray-600">Nos garanties qualité</p>
        </div>
        <div className="space-y-5">
            <div className="flex items-start">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mr-4 shadow-sm">
                <CheckCircle className="w-7 h-7 text-green-600" />
            </div>
            <div className="flex-1">
                <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-sm font-semibold text-gray-800 mb-1">Satisfaction Client</div>
                <div className="text-xs text-gray-600">Projets livrés conformes</div>
            </div>
            </div>
            <div className="flex items-start">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mr-4 shadow-sm">
                <Clock className="w-7 h-7 text-blue-600" />
            </div>
            <div className="flex-1">
                <div className="text-2xl font-bold text-gray-900 mb-1">24h</div>
                <div className="text-sm font-semibold text-gray-800 mb-1">Réactivité</div>
                <div className="text-xs text-gray-600">Réponse garantie</div>
            </div>
            </div>
            <div className="flex items-start">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mr-4 shadow-sm">
                <Star className="w-7 h-7 text-purple-600" />
            </div>
            <div className="flex-1">
                <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-sm font-semibold text-gray-800 mb-1">Sur Mesure</div>
                <div className="text-xs text-gray-600">Solutions adaptées</div>
            </div>
            </div>
        </div>
        <div className="mt-6 p-3 bg-white/60 rounded-xl">
            <div className="text-center">
            <div className="text-sm font-semibold text-gray-800">🏆 Expertise Reconnue</div>
            <div className="text-xs text-gray-600">Technologies modernes</div>
            </div>
        </div>
        </div>

        {/* Services Card - Enhanced */}
        <div id="services" className="md:col-span-4 lg:col-span-6 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 left-8 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-8 right-8 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
            <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2 mb-4">
                <Code className="w-5 h-5 text-blue-300 mr-2" />
                <span className="text-blue-200 font-medium">Nos expertises</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Services
                </span>
            </h2>
            <p className="text-blue-200 text-lg">Des solutions digitales complètes pour votre entreprise</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
            
            {/* Service 1 */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
                <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                    <Code className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Sites Web</h3>
                    <p className="text-blue-200 text-sm mb-4">Sites modernes, performants et optimisés</p>
                    <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-blue-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Design responsive
                    </div>
                    <div className="flex items-center text-xs text-blue-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Optimisation SEO
                    </div>
                    <div className="flex items-center text-xs text-blue-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Performance optimale
                    </div>
                    </div>
                    <div className="flex gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs">React</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs">Next.js</span>
                    </div>
                </div>
                </div>
            </div>

            {/* Service 2 */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
                <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-green-400" />
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Apps Mobiles</h3>
                    <p className="text-blue-200 text-sm mb-4">Applications natives et cross-platform</p>
                    <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-blue-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        iOS et Android
                    </div>
                    <div className="flex items-center text-xs text-blue-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Interface moderne
                    </div>
                    <div className="flex items-center text-xs text-blue-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Performance native
                    </div>
                    </div>
                    <div className="flex gap-2">
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs">React Native</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs">Flutter</span>
                    </div>
                </div>
                </div>
            </div>

            {/* Service 3 */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
                <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center">
                    <RefreshCw className="w-8 h-8 text-orange-400" />
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Refonte Graphique</h3>
                    <p className="text-blue-200 text-sm mb-4">Nouveau design moderne et attractif</p>
                    <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-blue-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Design moderne
                    </div>
                    <div className="flex items-center text-xs text-blue-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Interface utilisateur
                    </div>
                    <div className="flex items-center text-xs text-blue-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Expérience optimisée
                    </div>
                    </div>
                    <div className="flex gap-2">
                    <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs">UI/UX</span>
                    <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs">Design</span>
                    </div>
                </div>
                </div>
            </div>

            {/* Service 4 */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
                <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                    <Search className="w-8 h-8 text-purple-400" />
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Optimisation SEO</h3>
                    <p className="text-blue-200 text-sm mb-4">Optimisation technique du code</p>
                    <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-blue-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Balises optimisées
                    </div>
                    <div className="flex items-center text-xs text-blue-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Sitemap & robots.txt
                    </div>
                    <div className="flex items-center text-xs text-blue-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Structure technique
                    </div>
                    </div>
                    <div className="flex gap-2">
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">Balises</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">Analytics</span>
                    </div>
                </div>
                </div>
            </div>

            </div>
            
            <div className="text-center">
            <a href="#contact" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            </div>
        </div>
        </div>

        {/* Partners Card - Enhanced */}
        <div className="md:col-span-4 lg:col-span-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 left-4 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
            <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2 mb-4">
                <Users className="w-5 h-5 text-blue-300 mr-2" />
                <span className="text-blue-200 font-medium">Partenaires de confiance</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Ils nous font confiance</h2>
            <p className="text-blue-200">Découvrez les entreprises qui ont choisi SlupDev</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
                <div className="text-center">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Image src="/logo_kevin.png" alt="Kevin" width={150} height={150} className="object-contain" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Kevin</h3>
                <p className="text-blue-200 text-sm">Partenaire stratégique</p>
                <div className="mt-4 flex justify-center">
                    <div className="flex items-center bg-green-500/20 rounded-full px-3 py-1">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-green-300 text-sm">Actif</span>
                    </div>
                </div>
                </div>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
                <div className="text-center">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Image src="/logo_prevformation.webp" alt="PrevFormation" width={60} height={30} className="object-contain" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">PrevFormation</h3>
                <p className="text-blue-200 text-sm">Formation & Sécuriter</p>
                <div className="mt-4 flex justify-center">
                    <div className="flex items-center bg-green-500/20 rounded-full px-3 py-1">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-green-300 text-sm">Actif</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
            
            <div className="mt-8 text-center">
            <div className="inline-flex items-center bg-white/5 rounded-2xl px-6 py-3 border border-white/10">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-white font-semibold">Rejoignez nos partenaires</span>
            </div>
            </div>
        </div>
        </div>

        {/* Codeur.com Profile Card - Enhanced */}
        <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 shadow-sm border border-blue-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-blue-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-200/30 rounded-full blur-xl"></div>
        
        <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                C
                </div>
                <div>
                <div className="text-sm font-medium text-blue-600">Profil Freelance</div>
                <div className="text-lg font-bold text-gray-900">Codeur.com</div>
                </div>
            </div>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                ✓ Vérifié
            </div>
            </div>

            <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Dorian Boyer</h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Développeur full-stack avec 2 ans d'expérience. 
                Spécialisé dans les solutions web innovantes.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white/60 rounded-xl p-3">
                <div className="text-lg font-bold text-blue-600">2+</div>
                <div className="text-xs text-gray-600">Années d'expérience</div>
                </div>
                <div className="bg-white/60 rounded-xl p-3">
                <div className="text-lg font-bold text-purple-600">3</div>
                <div className="text-xs text-gray-600">Projets réalisés</div>
                </div>
            </div>

            <div className="space-y-2 mb-4">
                <div className="text-xs font-semibold text-gray-800 mb-2">Réalisations récentes :</div>
                <div className="flex items-center text-xs text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Application gestion budgétaire
                </div>
                <div className="flex items-center text-xs text-gray-600">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                Site vitrine SlupDev
                </div>
                <div className="flex items-center text-xs text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Système QR Code
                </div>
            </div>
            </div>

            <div className="flex gap-3">
            <a 
                href="https://www.codeur.com/-dorianbkka5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold text-sm hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
            >
                Voir mon profil
            </a>
            <a 
                href="#contact" 
                className="flex-1 border-2 border-blue-300 text-blue-700 px-4 py-3 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors text-center"
            >
                Me contacter
            </a>
            </div>
        </div>
        </div>
        
        {/* Testimonial/Stats Card - Complementary */}
        <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-8 shadow-sm border border-green-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-green-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-emerald-200/30 rounded-full blur-xl"></div>
        
        <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
            </div>
            <div>
                <div className="text-sm font-medium text-green-600">Satisfaction Client</div>
                <div className="text-lg font-bold text-gray-900">100% Réussite</div>
            </div>
            </div>

            <div className="space-y-4 mb-6">
            <div className="bg-white/60 rounded-xl p-4">
                <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-sm text-gray-600 ml-2">5/5</span>
                </div>
                <p className="text-sm text-gray-700 italic">
                "Excellent travail, très professionnel et à l'écoute. Je recommande vivement !"
                </p>
                <div className="text-xs text-gray-500 mt-2">- Client PrevFormation</div>
            </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
                <div className="text-2xl font-bold text-green-600">24h</div>
                <div className="text-xs text-gray-600">Réponse garantie</div>
            </div>
            <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">100%</div>
                <div className="text-xs text-gray-600">Projets livrés</div>
            </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-4">
            <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-sm font-semibold text-green-800">Devis gratuit sous 24h</span>
            </div>
            </div>
        </div>
        </div>

        {/* Contact Card - Enhanced */}
        <div id="contact" className="md:col-span-4 lg:col-span-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-6 left-6 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-6 right-6 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
            <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2 mb-4">
                <Mail className="w-5 h-5 text-blue-300 mr-2" />
                <span className="text-blue-200 font-medium">Contactez-nous</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Prêt à démarrer ?
                </span>
            </h2>
            <p className="text-blue-200 text-lg" style={{color:"white"}}>
                Transformons ensemble votre vision en réalité digitale. Devis gratuit sous 24h.
            </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-white">Pourquoi nous choisir ?</h3>
                <div className="space-y-4">
                <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                    <div className="font-semibold text-white mb-1">Devis 100% gratuit</div>
                    <div className="text-blue-200 text-sm">Estimation détaillée sans engagement</div>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                    <div className="font-semibold text-white mb-1">Réponse sous 24h</div>
                    <div className="text-blue-200 text-sm">Échange rapide et personnalisé</div>
                    </div>
                </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl">
                <div className="flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-white font-medium">contact@slup-dev.fr</span>
                </div>
                </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4 text-white">Démarrons votre projet</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                {submitStatus === 'success' && (
                    <div className="bg-green-500/20 border border-green-400 rounded-xl p-4 text-green-200 text-center">
                    <CheckCircle className="w-6 h-6 mx-auto mb-2 text-green-400" />
                    Message envoyé avec succès !
                    </div>
                )}
                
                <div className="grid grid-cols-2 gap-3">
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nom"
                    required
                    className="bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                
                <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">Service souhaité</option>
                    <option value="creation-site-web">Site web</option>
                    <option value="application-mobile">App mobile</option>
                    <option value="refonte-site">Refonte graphique</option>
                    <option value="optimisation-seo">SEO</option>
                </select>
                
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre projet..."
                    required
                    rows={4}
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50"
                >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande →'}
                </button>
                </form>
            </div>
            </div>
        </div>
        </div>

        </div>
      </main>

    {/* Footer */}
        <footer className="relative z-10 bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
            
            {/* Logo et description */}
            <div className="md:col-span-1">
                <div className="text-2xl font-bold mb-4">SlupDev</div>
                <p className="text-gray-400 mb-4 text-sm">
                Votre partenaire digital pour créer des solutions web et mobiles sur mesure.
                </p>
            </div>

            {/* Navigation */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                <ul className="space-y-2 text-sm">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Nos Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Devis Gratuit</a></li>
                </ul>
            </div>

            {/* Services */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-sm">
                <li><span className="text-gray-400">Sites Web</span></li>
                <li><span className="text-gray-400">Applications Mobiles</span></li>
                <li><span className="text-gray-400">Refonte Graphique</span></li>
                <li><span className="text-gray-400">Optimisation SEO</span></li>
                </ul>
            </div>

            {/* Légal */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Informations Légales</h3>
                <ul className="space-y-2 text-sm">
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Politique de Confidentialité</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Conditions Générales</a></li>
                <li>
                    <button 
                    onClick={() => {localStorage.removeItem('cookie-consent'); window.location.reload();}}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                    >
                    Gestion des Cookies
                    </button>
                </li>
                </ul>
            </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <div className="text-gray-500 text-sm">
                © 2024 SlupDev. Tous droits réservés.
            </div>
            </div>
        </div>
        </footer>
    </div>
  )
}
