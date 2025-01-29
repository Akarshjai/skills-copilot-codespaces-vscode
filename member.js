/**
 * Creates an object representing a member's skills.
 * 
 * @returns {Object} An object containing the member's skills.
 */
function skillsMember() {
    return {
        skills: [],
        addSkill: function(skill) {
            this.skills.push(skill);
        },
        removeSkill: function(skill) {
            const index = this.skills.indexOf(skill);
            if (index > -1) {
                this.skills.splice(index, 1);
            }
        },
        getSkills: function() {
            return this.skills;
        }
        };
    }