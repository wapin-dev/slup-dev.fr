import { ArrowLeft, FileText, Users, AlertTriangle, Scale } from 'lucide-react'
import Link from 'next/link'

export default function TermsPage() {
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
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Conditions Générales d'Utilisation</h1>
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
                <Users className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">1. Présentation</h2>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-gray-700 mb-4">
                  <strong>SlupDev</strong> est une agence de développement web et mobile proposant :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Création de sites web sur mesure</li>
                  <li>Développement d'applications mobiles</li>
                  <li>Refonte graphique de sites existants</li>
                  <li>Optimisation SEO technique</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Contact :</strong> contact@slupdev.fr
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Acceptation des conditions</h2>
              <p className="text-gray-700 mb-4">
                L'utilisation de ce site web implique l'acceptation pleine et entière des présentes conditions générales d'utilisation. 
                Si vous n'acceptez pas ces conditions, nous vous invitons à ne pas utiliser nos services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Services proposés</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-green-900 mb-2">🌐 Sites Web</h3>
                  <p className="text-green-800 text-sm">Développement de sites responsives et modernes</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-blue-900 mb-2">📱 Apps Mobiles</h3>
                  <p className="text-blue-800 text-sm">Applications iOS et Android natives</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-orange-900 mb-2">🎨 Refonte</h3>
                  <p className="text-orange-800 text-sm">Modernisation de votre présence digitale</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-purple-900 mb-2">🔍 SEO</h3>
                  <p className="text-purple-800 text-sm">Optimisation technique pour les moteurs</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Processus de commande</h2>
              <div className="bg-gray-50 p-6 rounded-xl">
                <ol className="list-decimal list-inside text-gray-700 space-y-3">
                  <li><strong>Demande de devis :</strong> Via notre formulaire de contact</li>
                  <li><strong>Étude du projet :</strong> Analyse de vos besoins et faisabilité</li>
                  <li><strong>Proposition commerciale :</strong> Devis détaillé sous 48h</li>
                  <li><strong>Validation :</strong> Signature du devis et acompte</li>
                  <li><strong>Développement :</strong> Réalisation selon le cahier des charges</li>
                  <li><strong>Livraison :</strong> Tests, formation et mise en ligne</li>
                </ol>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">5. Propriété intellectuelle</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Les éléments suivants sont protégés par le droit d'auteur :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Le code source développé par SlupDev</li>
                <li>Les designs et maquettes créés</li>
                <li>Le contenu du site web SlupDev</li>
                <li>Les logos et éléments graphiques</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-xl">
                <p className="text-yellow-800 text-sm">
                  <strong>Important :</strong> Les droits sur le projet final sont transférés au client après paiement intégral.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">6. Responsabilités</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-red-900 mb-2">Limitations de responsabilité</h3>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• SlupDev ne peut être tenu responsable des pannes techniques externes</li>
                    <li>• Les délais peuvent être impactés par des facteurs indépendants</li>
                    <li>• Le client est responsable du contenu qu'il fournit</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-green-900 mb-2">Nos engagements</h3>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Respect des délais convenus dans le devis</li>
                    <li>• Code de qualité et bonnes pratiques</li>
                    <li>• Support technique inclus selon les conditions</li>
                    <li>• Confidentialité totale de vos projets</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Données personnelles</h2>
              <p className="text-gray-700 mb-4">
                Le traitement de vos données personnelles est détaillé dans notre 
                <Link href="/privacy" className="text-blue-600 hover:underline font-semibold"> politique de confidentialité</Link>.
              </p>
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-blue-800 text-sm">
                  Vos données sont collectées uniquement pour répondre à vos demandes et améliorer nos services.
                  Elles ne sont jamais vendues ou partagées avec des tiers.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modifications des CGU</h2>
              <p className="text-gray-700">
                SlupDev se réserve le droit de modifier ces conditions à tout moment. 
                Les modifications prennent effet dès leur publication sur cette page. 
                Il est conseillé de consulter régulièrement cette page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Droit applicable</h2>
              <p className="text-gray-700">
                Les présentes conditions sont régies par le droit français. 
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>

            <div className="border-t border-gray-200 pt-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Contact pour questions juridiques</h3>
                <p className="text-gray-700">
                  <strong>Email :</strong> contact@slup-dev.fr<br/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
