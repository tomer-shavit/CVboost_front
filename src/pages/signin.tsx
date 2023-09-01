import { PageLayout } from "@/components/PageLayout";
import { SignIn } from "@clerk/nextjs/app-beta";

export default function Page() {
  return (
    <PageLayout>
      <div className="w-full flex items-center justify-center mb-28">
        <SignIn signUpUrl="/signup" />
      </div>
    </PageLayout>
  );
}
