import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Upload, Camera, Image as ImageIcon } from 'lucide-react';

export default function ASTPlateImageUpload() {
  const navigate = useNavigate();
  const [uploaded, setUploaded] = useState(false);
  
  return (
    <MobileLayout title="AST Plate Image">
      <div className="space-y-6 mt-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-800">
            Upload image of the antibiotic sensitivity test plate
          </p>
        </div>
        
        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center">
          {!uploaded ? (
            <>
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-600 mb-4">No image uploaded</p>
              <div className="flex gap-3 justify-center">
                <Button onClick={() => setUploaded(true)} variant="outline" className="rounded-xl">
                  <Camera className="w-5 h-5 mr-2" />
                  Camera
                </Button>
                <Button onClick={() => setUploaded(true)} variant="outline" className="rounded-xl">
                  <ImageIcon className="w-5 h-5 mr-2" />
                  Gallery
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-10 h-10 text-green-600" />
              </div>
              <p className="text-green-600 font-semibold">Image uploaded!</p>
            </>
          )}
        </div>
        
        <div className="flex gap-3">
          <Button 
            onClick={() => navigate('/evidence/preview')} 
            variant="outline"
            className="flex-1 py-6 rounded-xl"
          >
            Skip
          </Button>
          <Button 
            onClick={() => navigate('/evidence/lab-report')} 
            className="flex-1 bg-blue-600 py-6 rounded-xl"
          >
            Next
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
