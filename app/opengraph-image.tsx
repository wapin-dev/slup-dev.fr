import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'SlupDev - Agence de Développement Web et Mobile'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e293b 0%, #3730a3 50%, #7c3aed 100%)',
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 60,
              fontWeight: 'bold',
              color: 'white',
              marginRight: 30,
            }}
          >
            S
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              color: 'white',
            }}
          >
            <div style={{ fontSize: 72, fontWeight: 'bold', marginBottom: 10 }}>
              SlupDev
            </div>
            <div style={{ fontSize: 36, opacity: 0.8 }}>
              Développement Web & Mobile
            </div>
          </div>
        </div>
        
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#e2e8f0',
            fontSize: 28,
            marginBottom: 20,
          }}
        >
          ✨ Devis gratuit sous 24h • 💻 Sites web • 📱 Apps mobiles • 🎨 Refonte
        </div>
        
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            padding: '15px 30px',
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
          }}
        >
          slup-dev.fr
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
