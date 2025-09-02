import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 정적 사이트 내보내기 설정 (Vercel 배포용)
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // 성능 최적화 설정
  compress: true,
  poweredByHeader: false,
  
  // 이미지 최적화 (정적 배포용으로 수정)
  images: {
    unoptimized: true, // 정적 배포에서는 이미지 최적화 비활성화
  },

  // 실험적 기능
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig