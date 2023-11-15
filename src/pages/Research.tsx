import ResearchesList from '../components/containers/ResearchesList';
import ResearchForm from '../components/forms/ResearchForm';
import DefaultLayout from '../components/layouts/DefaultLayout';
import { useGetCurrentRoute } from '../utils';
import { slugs } from '../utils/routes';
export const Research = () => {
  const currentRoute = useGetCurrentRoute();

  const renderContainer = () => {
    if (currentRoute?.slug === slugs.researches) return <ResearchesList />;

    if ([slugs.updateResearch(':id'), slugs.newResearch].includes(currentRoute?.slug))
      return <ResearchForm />;

    return <></>;
  };

  return (
    <DefaultLayout
      title={currentRoute?.title}
      subtitle={currentRoute?.subtitle}
      back={currentRoute?.back}
    >
      {renderContainer()}
    </DefaultLayout>
  );
};

export default Research;
