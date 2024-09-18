import CardContainer from "./CardContainer";

export default async function List() {
  const res = await fetch(
    "https://learnext-7ux2hdwqk-dlai-eng.vercel.app/api/trpc/course.getAll?input=%7B%22json%22%3A%7B%22isOnSale%22%3Atrue%7D%7D",
  );
  const data = await res.json();

  const courses = data?.result?.data?.json?.courses || [];
  return (
    <section className="maxW-screen-md mx-auto">
      <CardContainer courses={courses} />
    </section>
  );
}
