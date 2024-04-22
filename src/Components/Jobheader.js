import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TechniciansClockContext } from "../Applications/TechniciansClocking/Context/TechniciansClockContext";
import { Dmslabel } from "./Dms/Dmslabel";

export function Jobheader() {
  const { technicianStatus, selectedJob, setSelectedJob } = useContext(
    TechniciansClockContext
  );

  return (
    <View
      style={{
        height: 60,
        padding: 10,
        backgroundColor: technicianStatus.colour,
        flexDirection: "row", // Update to use row direction for aligning items
        alignItems: "center",
      }}
    >
      {/* Back Button */}
      {!technicianStatus.clockedOn && (
        <TouchableOpacity
          onPress={() => setSelectedJob("")}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>{"<"} </Text>
          {/* Simple arrow symbol as back button */}
        </TouchableOpacity>
      )}

      {/* Content */}
      {technicianStatus.clockedOn ? (
        <View style={styles.jobInfoContainerClockedOn}>
          <View style={styles.flexOnePaddingLeft}>
            <Dmslabel
              {...{
                Textstr: technicianStatus.jobID,
                fontSize: 25,
                fontWeight: "bold",
              }}
            />
          </View>
          <View style={styles.flexOneAlignItemsEnd}>
            <Dmslabel
              {...{
                Textstr:
                  technicianStatus.TimeTaken +
                  "/" +
                  technicianStatus.TimeAllocated,
                fontSize: 25,
                fontWeight: "bold",
              }}
            />
          </View>
        </View>
      ) : (
        <View style={styles.jobInfoContainer}>
          <View style={styles.flexOnePaddingLeft}>
            <Text style={styles.selectedJobText}>{selectedJob}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginRight: 10, // Adjust spacing as needed
    paddingVertical: 10, // Increase vertical padding
    paddingHorizontal: 15, // Increase horizontal padding to make the button wider
    justifyContent: "center", // Center the icon/text vertically
    alignItems: "center", // Center the icon/text horizontally
  },
  backButtonText: {
    fontSize: 20, // Adjust size as needed
    color: "#000", // Adjust color as needed
    // You might want to adjust the font size if the button should be larger
  },
  // Other styles remain unchanged
  jobInfoContainerClockedOn: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  jobInfoContainer: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginRight: 75,
  },
  flexOnePaddingLeft: {
    flex: 1,
    paddingLeft: 10,
  },
  flexOneAlignItemsEnd: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 10,
  },
  selectedJobText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});