import { ArrowLeft, Shield, Eye, Database, Mail } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-400/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Politique de Confidentialité</h1>
                <p className="text-blue-200">SlupDev - Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <div className="prose prose-lg max-w-none">
            
            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">1. Collecte des données</h2>
              </div>
              <p className="text-gray-700 mb-4">
                SlupDev collecte les données suivantes dans le cadre de ses services :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Données de contact :</strong> nom, email, téléphone via notre formulaire de contact</li>
                <li><strong>Données de navigation :</strong> adresse IP, pages visitées, durée de visite (Google Analytics)</li>
                <li><strong>Cookies techniques :</strong> nécessaires au fonctionnement du site</li>
                <li><strong>Cookies analytiques :</strong> avec votre consentement pour améliorer nos services</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Database className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">2. Utilisation des données</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Vos données sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Répondre à vos demandes de devis et questions</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Analyser le trafic et l'utilisation du site (anonymisé)</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">3. Protection des données</h2>
              </div>
              <p className="text-gray-700 mb-4">
                SlupDev s'engage à protéger vos données personnelles :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Chiffrement SSL/TLS pour toutes les transmissions</li>
                <li>Stockage sécurisé sur des serveurs européens</li>
                <li>Accès limité aux données par le personnel autorisé</li>
                <li>Pas de vente ou partage avec des tiers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Vos droits RGPD</h2>
              <p className="text-gray-700 mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-blue-900 mb-2">Droit d'accès</h3>
                  <p className="text-blue-800 text-sm">Consulter vos données personnelles</p>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-green-900 mb-2">Droit de rectification</h3>
                  <p className="text-green-800 text-sm">Corriger vos informations</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-orange-900 mb-2">Droit à l'effacement</h3>
                  <p className="text-orange-800 text-sm">Supprimer vos données</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-purple-900 mb-2">Droit d'opposition</h3>
                  <p className="text-purple-800 text-sm">Refuser le traitement</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies et traceurs</h2>
              <p className="text-gray-700 mb-4">
                Notre site utilise des cookies pour améliorer votre expérience :
              </p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Types de cookies utilisés :</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Cookies essentiels :</strong> Fonctionnement du site (obligatoires)</li>
                  <li><strong>Google Analytics :</strong> Statistiques de visite (avec consentement)</li>
                  <li><strong>Préférences :</strong> Mémorisation de vos choix cookies</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">6. Contact</h2>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-gray-700 mb-4">
                  Pour exercer vos droits ou toute question concernant vos données personnelles :
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email :</strong> contact@slup-dev.fr</p>
                  <p><strong>Responsable :</strong> SlupDev</p>
                  <p><strong>Délai de réponse :</strong> 30 jours maximum</p>
                </div>
              </div>
            </section>

            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-500 text-center">
                Cette politique de confidentialité peut être mise à jour. 
                La date de dernière modification est indiquée en haut de cette page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
