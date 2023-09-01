import { PageLayout } from "@/components/PageLayout";
import { SignUp } from "@clerk/nextjs/app-beta";

export default function Page() {
  return (
    <PageLayout>
      <SignUp />
    </PageLayout>
  );
}
