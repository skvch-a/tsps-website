import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2 items-center">
              <AlertCircle className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-gray-900">404 Страница не найдена</h1>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              К сожалению, такой страницы не существует.<br />
            </p>
            <div className="mt-6 flex justify-center">
              <a
                  href="/"
                  className="px-5 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                На главную
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
  );
}