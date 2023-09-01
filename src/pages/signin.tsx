import { PageLayout } from "@/components/PageLayout";
import { SignIn } from "@clerk/nextjs/app-beta";

export default function Page() {
  return (
    <PageLayout>
      <SignIn />
    </PageLayout>
  );
}
