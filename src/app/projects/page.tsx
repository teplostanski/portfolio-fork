import PreviewHeader from '@/components/PreviewHeader/PreviewHeader'
import PreviewList from '@/components/PreviewList/PreviewList'
import getMarkdownData from '@/shared/utils/getMarkdownData'

export default function HomePageRu() {
  const data = getMarkdownData('content/projects/ru')

  return (
    <main>
      <PreviewHeader translationScope='ProjectsPage' />
      <PreviewList data={data} />
    </main>
  )
}
