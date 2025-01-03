import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Courses = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">หลักสูตร</h1>
            <div className="card shadow">
                <div className="card-body">
                    <h5 className="card-title">รายละเอียดหลักสูตร</h5>
                    <p className="card-text">เอกสารประกอบหลักสูตร (PDF)</p>
                    <div
                        style={{
                            border: '1px solid #ddd',
                            height: '600px',
                        }}
                    >
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js">
                            <Viewer
                                fileUrl="https://drive.google.com/uc?export=download&id=1KlESxHfQdaNQ5trzY9rSJhpiDCU5GDe8"
                                plugins={[defaultLayoutPluginInstance]}
                            />
                        </Worker>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
