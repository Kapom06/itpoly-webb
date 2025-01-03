import React from 'react';

const Contact = () => {
    return (
        <div className="container mt-4">
            <h1 className="text-center">ติดต่อเรา</h1>
            <form className="mt-4">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        ชื่อ
                    </label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        อีเมล
                    </label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                        ข้อความ
                    </label>
                    <textarea
                        className="form-control"
                        id="message"
                        rows="4"
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    ส่งข้อความ
                </button>
            </form>
        </div>
    );
};

export default Contact;
