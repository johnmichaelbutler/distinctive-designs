import { useRouter } from 'next/router';

const Project = () => {
  const router = useRouter();
  const { project_name } = router.query;

  return (
    <div>
      <p>Project: {project_name }</p>
    </div>
  )
}