const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    main: {
        name: String,
        occupation: String,
        description: String,
        // ... other fields from the "main" object
    },
    resume: {
        skillmessage: String,
        education: [
            {
                school: String,
                degree: String,
                graduated: String,
                description: String,
            }
            // ... other education objects
        ],
        work: [
            {
                company: String,
                title: String,
                years: String,
                description: String,
            }
            // ... other work objects
        ],
        skills: [
            {
                name: String,
                level: String,
            }
            // ... other skills objects
        ],
    },
    portfolio: {
        projects: [
            {
                title: String,
                category: String,
                image: String,
                url: String,
            }
            // ... other projects objects
        ],
    },
    testimonials: {
        testimonials: [
            {
                text: String,
                user: String,
            }
            // ... other testimonials objects
        ],
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
